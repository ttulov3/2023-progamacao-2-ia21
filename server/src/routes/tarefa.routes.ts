import { Router } from "express"
import database from "../database"

const router = Router()

router.get("/", async (req, res) => {
  console.log("READED ITENS")
  const db = await database()
  const result = await db.all('SELECT * FROM todo')
  res.json(result)
})

router.get("/:id", async (req, res) => {
  console.log("READED ITEN")
  const db = await database()
  const result = await db.all('SELECT * FROM todo WHERE id=?', [req.params.id])
  res.json(result)
})

router.post("/", async (req, res) => {
  console.log("CREATED NEW ITEM")
  const db = await database()
  const result = await db.run('INSERT INTO todo(texto) VALUES(?)', [req.body.texto] )
  res.json({ id: result.lastID })
})

router.put("/:id", async (req, res) => {
  console.log("UPDATE ITEM")
  const db = await database()
  const result = await db.run('UPDATE todo SET texto=?, done=? WHERE id=? ', [req.body.texto, req.body.done, req.params.id])
  res.send("# Alterar todos os dados de uma tarefa")
})

router.patch("/:id", async (req, res) => {
  console.log("UPDATE ITEM")
  const db = await database()
  const result = await db.run('UPDATE todo SET texto=?, done=? WHERE id=? ', [req.body.texto, req.body.done, req.params.id])
  res.send("# Alterar dados específicos de uma tarefa")
})

router.delete("/:id", async  (req, res) => { 
  console.log("DELETE ITENS")
  const db = await database()
  const result = await db.all('DELETE FROM todo WHERE id=?', [req.params.id]) 
  res.json(result)
  res.send("# Excluir uma tarefa")
})

export default router