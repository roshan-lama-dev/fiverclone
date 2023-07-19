import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");
  try {
    console.log(file, data);
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dkdudnizi/image/upload",
      data
    );
    console.log(res);
    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};

export default upload;
