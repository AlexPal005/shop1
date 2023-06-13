import {useState} from "react";

export const AddProduct = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return(
      <div>
        <form>
          <input type="file" onChange={handleChange} />
        </form>
      </div>
  )
}