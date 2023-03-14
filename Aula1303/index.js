//#region Modulos Externos
const chalk = require('chalk')
const inquirer = require('inquirer')
//#endregion
//#region Modulos Internos
const fs = require('fs')
//#endregion
operation()
//#region Operações Iniciais
function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que deseja fazer?',
            choices: [
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }
    ]).then((answer) => {
        const action = answer['action']
        if (action === 'Criar conta') {
            console.log('Criando sua conta')
        } else if (action === 'Consultar saldo') {
            console.log('Consultando saldo')
        } else if (action === 'Consultar saldo') {
            console.log('Depositar')
        } else if (action === 'Depositando') {
            console.log('Sacar')
        }else if (action === 'Sacando') {
            console.log('Consultando saldo')
        }else if(action === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado po utilizar o Contas ETEC'))
        SETtIMEOUT(()=>{
            Process.exit()
        }, 1500);
        }
     } )
}
//#endregion