const  openai_config= require('../config/configrations')
const openai = openai_config.openai
async function createFineTune() {
    try {
        const response = await openai.createFineTune({
            training_file: 'file-bDma8tOHBry4Rm073Fd4vGO4',
            model: 'davinci'
        })
        console.log('response: ', response)
    } catch (err) {
        console.log('error: ', err.response.data.error)
    }
}

createFineTune()