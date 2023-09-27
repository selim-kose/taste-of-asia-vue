<template>
  <footer>
    <div class="social-media">
      <p class="heading-footer">Social media</p>
      <div class="footer-logos">
        <a class="link" href="https://sv-se.facebook.com/" aria-label="Link to our facebook-page"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
        </a>
        <a class="link" href="https://www.instagram.com/" aria-label="Link to our instagram-page"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg>
        </a>
        <a class="link" href="https://twitter.com/?lang=sv" aria-label="Link to our twitter-page"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg>
        </a>
      </div>
    </div>
    <div>
      <address>
        <p class="heading-footer">Contact</p>
        <a class="link" href="tel:415-201-6370"> +4670 123 45 67</a>
        <a class="link" href="mailto:info@mail.com">info@mail.com</a>
      </address>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  background-image: linear-gradient(to bottom right, aqua, rgba(18, 255, 125, 0.895));
  gap: 3rem;
  padding: .5rem;
  box-shadow: 1rem -1rem 2rem rgb(221, 221, 221);
}

.social-media {
  display: flex;
  flex-direction: column;
}

address {
  display: flex;
  flex-direction: column;
}

.heading-footer {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin: .3rem auto;
}

footer a {
  padding: .3rem 0rem
}

.footer-logos {
  display: flex;
  gap: .7rem;
}

.footer-logos img {
  width: 3rem;
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
</style>