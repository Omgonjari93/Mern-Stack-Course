

const loginUser=() => {
    try{

    } catch (error){
        console.log(error)
    }
}
const registerUser = async (req,res) => {
try{

      const { userName, email ,fullName } = req.body
        
      const userData = await userName({
        userName , email , fullName
      })
    }catch (error){
        console.log(error)
    }
}