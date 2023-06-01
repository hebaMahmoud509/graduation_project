const  openai_config= require('../config/configrations')
const openai = openai_config.openai
async function listFineTunes() {
    try {
        const response = await openai.listFineTunes()
        console.log('data: ', response.data.data)
    } catch (err) {
        console.log('error:', err)
    }
}

listFineTunes()