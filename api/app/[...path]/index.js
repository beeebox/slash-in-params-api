export default function (req, res) {
  const { path } = req.params
  res.status(200).json({ path })
}