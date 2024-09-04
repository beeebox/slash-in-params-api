export default function (req, res) {
  console.log(req.query, 'query')
  res.status(200).json(req.query || {})
}