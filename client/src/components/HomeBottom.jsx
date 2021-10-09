import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import './HomeBottom.modules.css';

const HomeBottom = (props) => {
    const [ name, setName ] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        // Prevents page from reloading upon submitting the form
        e.preventDefault();
        // Stores the user's name in local storage
        window.sessionStorage.setItem('name', name);
        var reader = new FileReader();
        if(document.getElementById('avatar-picture').value) {
            var imgName = document.getElementById('avatar-picture').files[0].imgName;
            console.log(imgName);
            reader.addEventListener('load', function () {
                if (this.result && sessionStorage) {
                    window.sessionStorage.setItem('avatar', this.result);
                    // alert('Image saved in local storage');
                    // showImage();
                };
            });
            reader.readAsDataURL(document.getElementById('avatar-picture').files[0]);
            history.push('/chat');
        } else {
            history.push('/chat');
        }
    };

    // const avatarPic = document.getElementById('result');

    // function showImage() {
    //     for(let i = 0; i < window.sessionStorage.length; i++) {
    //         let res = window.sessionStorage.getItem(window.sessionStorage.key(i));
    //         var image = new Image();
    //         image.src = res;
    //         avatarPic.appendChild(image);
    //     }
    // }

    return (
        <div className="bottom-container">
            <div className="bottom-main-content">
                <form onSubmit={ handleSubmit }>
                <h3>To get started, please enter your name</h3>
                {/* { JSON.stringify(name) } */}
                    <TextField id="outlined-basic" label="Name" variant="standard" onChange={ (e) => setName(e.target.value) } value={ name } style={{ width: '40%', marginTop: '3%' }} required/>
                <h3 style={{ marginTop: '3%' }}>Add an avatar picture (optional)</h3>
                <input id="avatar-picture" type="file" style={{ marginTop: '3%' }}></input>
                <br/><br/>
                <button className="btn btn-primary">Submit</button>
                </form>
                {/* { sessionStorage.getItem('avatar') } */}
                {/* <div id="result"></div> */}
            </div>
        </div>
    )
}

export default HomeBottom;