import mongoose from 'mongoose';




const Connection = async (username, password) => {
    //const URL = 'mongodb+srv://Subhash'+'examplepwd'+':@ecommercewebsite.c84ra.mongodb.net/ECOMMERCEWEBSITE?retryWrites=true&w=majority';
    const URL = `mongodb+srv://${username}:${password}@ecommercewebsite.c84ra.mongodb.net/ECOMMERCEWEBSITE?retryWrites=true&w=majority`;
    //const URL = 'mongodb+srv://Subhash Kumar' + 'kumar@123' + ':@cluster0.niumf.mongodb.net/PROJECT 0?retryWrites=true&w=majority';
    //const URL = 'mongodb+srv://$(username):$(password)@cluster0.niumf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    //const URL = 'mongodb+srv://Subhash' + 'example123' + ':@cluster0.niumf.mongodb.net/PROJECT 0?retryWrites=true&w=majority';
    //const URL = 'mongodb+srv://Subhash Kumar' + 'example123' + ':@cluster0.niumf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    try {
        await mongoose.connect(URL, { useNewurlParser: true, useUnifiedTopology: true, useFindAndModify: false});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}
export default Connection;
