import Message from "../../models/Message";

const Query = {

    getMessages: async () => {
        return await Message.find();
    }
};

export default Query;