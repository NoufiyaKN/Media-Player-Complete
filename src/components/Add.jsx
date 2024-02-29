import React ,{useState}from 'react'
import {Modal,Button,Form,FloatingLabel} from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';

function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo]=useState({
    caption:"",imageURL:"",youtubeLink:""
  })
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
    }
    const handleShow = () => setShow(true);
    console.log(uploadVideo);
    const getYoutubeEmbedLink=(link)=>{
      if(link.includes("v=")){
        let videoId=link.split("v=")[1].slice(0,11)
        setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      }else{
    setUploadVideo({...uploadVideo,youtubeLink:''})
    alert("input proper youtube link!!")
  }
    }
   const handleupload= async()=> {
   const {caption,imageURL,youtubeLink}=uploadVideo
   if(caption && imageURL && youtubeLink){
  const result=await uploadVideoAPI(uploadVideo)
  console.log(result);
  if(result.status>=200 && result.status<300){
    alert(`video'${result.data.caption}'upload successfully `)
    setUploadVideoResponse(result.data)
    handleClose()
  }else{
    alert("API call failed ... please try after some time!!!")
  }
   }else{
    alert('please fill the form completely!!')
   }
    }
  return (
<>
<div className='d-flex'>
    <h5>Upload a video</h5>
    <button className='btn bg-secondary ms-2 rounded-circle' onClick={handleShow}>  <i className="fa-solid fa-plus"></i></button>
   
</div>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='border rounded border-secondary p-3'>
            <p>please fill the following details</p>
        <FloatingLabel
       
        controlId="floatingInput"
        label="Video Caption"
        className="mb-3"
      > <Form.Control value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel
       
       controlId="floatingInput"
       label="image url"
       className="mb-3"
     > <Form.Control value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="image url" />
     </FloatingLabel>
     <FloatingLabel
       
       controlId="floatingInput"
       label="Youtube video link"
       className="mb-3"
     > <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value) }type="text" placeholder=" Youtube video link" />
     </FloatingLabel>
      </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
   cancel
          </Button>
          <Button onClick={handleupload}  variant="info">Upload</Button>
        </Modal.Footer>
      </Modal>
</>
    )
}

export default Add