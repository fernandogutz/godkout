import { useDispatch } from "react-redux";
import { setSuccessMsg } from "../../store/mark/markSlice";
import HeaderHome from "../../ui/components/HeaderHome"
import AddNewMark from "../components/AddNewMark"

const CreateMark = () => {
  const dispatch = useDispatch();
  dispatch(setSuccessMsg(null));


  return (
    <>
        <HeaderHome></HeaderHome>
        <div className="content">
          <h1 className="title__page">
            Crear una marca
          </h1>
          <AddNewMark></AddNewMark>
        </div>

    </>
  )
}

export default CreateMark