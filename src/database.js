import { connect} from "mongoose";

(async () => {
    try {
        const db = await connect("mongodb+srv://M001:M001@sandbox.4gbkgcn.mongodb.net/?retryWrites=true&w=majority/jamonSerrrano");
        console.log("Database is connected to", db.connection.name);
    } catch (error) {
        console.error(error);
    }
    })();
    