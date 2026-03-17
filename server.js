const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("CampusFlow Backend Running ✅")
})

app.post("/add-deadline", async (req, res) => {
  const { title, date, message } = req.body

  try {
    await axios.post("YOUR_N8N_WEBHOOK_URL", {
      title,
      date,
      message
    })

    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: "n8n error" })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("Server running on port " + PORT)
})