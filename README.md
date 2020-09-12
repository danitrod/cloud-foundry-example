# Cloud Foundry Example

Suba uma API Node.js no Cloud Foundry.

## Vídeo

[Acesse o vídeo com uma explicação passo a passo aqui.](https://www.youtube.com/watch?v=PFGPgO3YZ4c)

## Passo a passo

1. Instalar a [IBM Cloud CLI](https://github.com/IBM-Cloud/ibm-cloud-cli-release). Verifique se está configurada corretamente executando `ibmcloud -v`;
2. Instalar o plugin do Cloud Foundry executando `ibmcloud cf install`;
3. Clonar o repositório executando `git clone https://github.com/danitrod/cloud-foundry-example.git`;
4. Acessar o repositório: `cd cloud-foundry-example`;
5. Modificar o arquivo [manifest.yml](./manifest.yml), inserindo um nome para seu app e uma rota pública que desejar.
6. Logar na IBM Cloud CLI: `ibmcloud login`;
7. Destinar a um espaço Cloud Foundry da conta: `ibmcloud target --cf`;
8. Subir a aplicação para a nuvem: `ibmcloud cf push`.

Para subir atualizações no app, basta executar novamente `ibmcloud cf push`.

## Referências

- [Cloud Foundry Docs - Deploying with App Manifests](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html)
- [IBM Cloud Foundry](https://www.ibm.com/cloud/cloud-foundry)
