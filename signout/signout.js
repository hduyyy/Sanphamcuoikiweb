const inputsubmit=document.getElementById('submit');
        const inputusername=document.getElementById('username');
        const inputfirstname=document.getElementById('firstname');
        const inputpassword=document.getElementById('password');
        const inputname=document.getElementById('name');
        const inputpassword2=document.getElementById('password2');
        function signout()
        {
            var kiemtra=false;
            if(inputusername.value.length>7 && inputfirstname.value.length>2 && inputname.value.length>2 && inputpassword.value.length>2 && inputpassword2.value==inputpassword.value)
            {
                kiemtra=true;
            }
            if(kiemtra==true){
                const dlnd={
                    username: inputusername.value,
                    name:inputname.value,
                    firstname: inputfirstname.value,
                    password: inputpassword.value,
                };
                let json=JSON.stringify(dlnd);
                localStorage.setItem(inputusername.value,json);
                alert('Dang ky thanh cong!')
                window.location.href="../login/login.html";
            }
            else
            {
            alert('Vui long nhap lai thong tin cua ban!');
            }
        }