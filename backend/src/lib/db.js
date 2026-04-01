import mongosse from "mongosse";

export const connectDB = async () => {
    try{
        const conn = await mongosse.connect(process.env.MONGO_URI)
        console.log(`Database conectado! ${conn.connection.host}`)
    } catch (error){
        console.log("Erro ao conectar database", error);
        process.exit(1) // Sair do erro
    }
} 