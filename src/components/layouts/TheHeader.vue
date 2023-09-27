<template>
    <div class="main">
       
        <nav>
             <img src="../../assets/img/logo/logo.png" alt="">
            <div>
                <input type="text" placeholder="Search recipe...">
                <!-- <button>Search</button> -->
            </div>
            <div class="hamburger">
                <span class="hamburger-line"></span>
            </div>

            <!-- <RouterLink class="link" to="/">Home</RouterLink>
            <RouterLink class="link" to="/about">Categorys</RouterLink> -->
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img {
    height: 50px;
    width: 50px;
}


div {
    
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
}

.link {
    list-style: none;
    color: black;
    text-decoration: none;
}

.link:visited {
    text-decoration: none;
    color: black;
}

input {
    border-radius: 10px;
    border: none;
    padding: .3rem 1rem;
    /* margin-left: 8rem; */
}

button {
    border-radius: 8px;
    border: none;
    padding: .3rem .5rem
}

.main {
    padding: 1rem;
    background-image: linear-gradient(to bottom right, aqua, rgba(18, 255, 125, 0.895));
}

.hamburger {
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height:80px;
    cursor: pointer;
    transition: all .5s ease-in-out;
    overflow: hidden;
    /* background-image: rgba(255, 255, 255, 0); */
    
  }
  
  .hamburger-line {
    display: block;
    width: 18px;
    height:3px;
    background: black;
    border-radius: 5px;
    /* transform: rotate(90deg); */
    margin: 5px auto;
    transition: all .5s ease-in-out;
    
  }


  .hamburger-line::before,
  .hamburger-line::after {
    content: '';
    position: absolute;
    display: block;
    width: 18px;
    height:3px;
    background: black;
    border-radius: 5px;
    transform: rotate(90deg);
    transition: all .5s ease-in-out;
  }
  
  .hamburger-line::before {
    transform: translateY(-8px);
  }
  
  .hamburger-line::after {
    transform: translateY(8px);
  }
  
  .hamburger.open .hamburger-line   {
    transform: translateX(-50px);
  }
  
  .hamburger.open .hamburger-line::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  
  .hamburger.open .hamburger-line::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }


</style>