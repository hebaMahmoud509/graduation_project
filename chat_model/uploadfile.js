const  openai_config= require('../config/configrations')

const openai = openai_config.openai
const fs = require('fs')
async function upload() {
    try {
        const response = await openai.createFile(
            fs.createReadStream("./chatbot_data/chatDialog.jsonl"),
            "fine-tune"
        );
        console.log('File ID: ', response.data.id)
    } catch (err) {
        console.log('err: ', err)
    }
}

upload()
