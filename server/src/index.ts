import express from "express"

const PORT = 3000
const app = express()

// Ação   - HTTP        - BD
// Create - POST        - INSERT
// Read   - GET         - SELECT
// Update - PUT PATCH   - UPDATE
// Delete - DELETE      - DELETE

app.use(express.json())
app.get("/", (req, res) => res.send("Hellow world!"))

app.get("/tarefa", (req, res) => res.send("# ZZZZ Buscar dados de todas as tarefas"))
app.get("/tarefa/:id", (req, res) => res.send("# Buscar dados uma tarefa"))
app.post("/tarefa", (req, res) => res.send("# Inserir uma tarefa"))
app.put("/tarefa", (req, res) => res.send("# Alterar todos os dados de uma tarefa"))
app.patch("/tarefa", (req, res) => res.send("# Alterar dados específicos de uma tarefa"))
app.delete("/tarefa/:id", (req, res) => res.send("# Excluir uma tarefa"))

app.listen(PORT, () => console.log(`⚡ server is running on port ${PORT}`))