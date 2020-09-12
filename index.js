const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'text/' });
const fs = require('fs');

const app = express();

const location = process.env.LOCATION || 'local';

app.get('/', (_, res) => {
  return res.send('<h1>Hello from ' + location + '</h1>');
});

app.post('/read', upload.single('text'), async (req, res) => {
  if (!req.file) {
    return res.json({
      err: 'Arquivo de texto não encontrado.'
    });
  }

  try {
    const text = fs.readFileSync(req.file.path, 'utf8');

    return res.json({ text });
  } catch (err) {
    console.error('err', err);

    return res.json({ err });
  } finally {
    try {
      fs.unlinkSync(req.file.path);
    } catch {
      console.error('Remoção do arquivo falhada.');
    }
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Executando na porta', port));
