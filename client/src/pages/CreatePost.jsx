
import { useState } from "react";
import { Typography ,Box , styled, TextField, Button } from "@mui/material";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { savePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import { routhPath } from "../routes/route";

const Componenet= styled (Box)({
    padding: '80px 200px',
    background: '#F5F5F5'
})

  const Container = styled (Box)({
    display: 'flex',
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding : '0, 70px',
    '& > p' : {
        fontSize: 35,
        fontWeight: 700,
        opacity: '.7'
    }

  })
  const FormWrapper = styled (Box)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    padding: 20,
    background: '#FFFFFF',
    borderRadius:20,
    '& > *': {
        marginTop: '20px !important'
    }

  })

  const defaultObj={
     profile: "",
     type: "",
     description:"",
     experience:"",
     technology: [],
     salary: ""

  }

    const options ={
        type :["online", "Offline"],
        experience: ["0-2 years", "3-5 years" , "5-8 years" , "8 + years"],
        technology: ["java", "c", "c++", "JavaScipt" , "React", "Node.js", "Docker", "AWS" ,"HTML", "CSS", "Pyhton"],
        salary: ["0 - 3 lakh", "3 - 5 lakh", "5 - 8 lakh" , "8 - 13 lakh ", "13 + lakh"]
    }

const CreatePost =() => {
   const [data, setData] = useState(defaultObj);

    const navigate = useNavigate();

    const image ="https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-300x169.jpg";

    const handleChange = (e) =>{
        setData ({...data, [e.target.name]: e.target.value});
    }

    const saveJob = async () =>{
      await savePost(data);
      navigate (routhPath.posts);
    }
    console.log(options.technology);    

    return(
        <>
        <Header />
          <Componenet>
             <Container>
                <Typography style={{margin: "auto"}}> Create a job post </Typography>
                <img src={image} alt= "create" style={{marginRight: 18, height: 150, width: 150}} />
             </Container>
             <FormWrapper>
               <TextField 
                placeholder = "Job Title"
                name="profile"
                onChange={handleChange}
               />
                <Dropdown 
                 label ="Job Type"
                 id = "job-type-label"
                 value={data.type}
                 handleChange={handleChange}
                 name="type"
                 options={options.type}
                />
                <TextField 
                placeholder = "Job description"
                name="description"
                onChange={handleChange}
               />
                <Dropdown 
                
                name="experience"
                label ="Experience"
                id = "job-experience-label"
                value={data.experience}
                handleChange={handleChange}
                options={options.experience}
                />
                <Dropdown 
                 label ="Technology"
                 id = "job-technology-label"
                 value={data.technology}
                 handleChange={handleChange}
                 options={options.technology}
                 name="technology"
                 multiple
                />
                <Dropdown 
                label ="Salary"
                id = "job-salary-label"
                value={data.salary}
                handleChange={handleChange}
                options={options.salary}
                name="salary"
                />
                <Button onClick={() => saveJob()} variant="contained" >Save Job</Button>
            </FormWrapper>
           </Componenet>
        </>
        
    )
}
  export default CreatePost;