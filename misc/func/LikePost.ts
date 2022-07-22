import axios from 'axios'
import toast from 'react-hot-toast'

export const LikePost = async (id: string) => {
  await axios
    .post(`https://sistech-api.vercel.app/blog/like`, { id: id })
    .then(function (response) {
      toast.success('Liked')
      window.location.reload() // workaroundnnya
    })
    .catch(function (error) {
      console.log(error)
    })
}
