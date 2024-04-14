function login()
        {
            const inputusername=document.getElementById('username');
            const inputpassword=document.getElementById('password');
            const dlnd=JSON.parse(localStorage.getItem(inputusername.value));
            if(
                (dlnd.username==inputusername.value) && (dlnd.password==inputpassword.value)
                )
            {
                alert('Đúng rồi đó!');
                window.location="../mxh/index.html";
            }
            else{
                alert('Sai rồi, Thử lại!');
            }
        }