const menu = document.querySelector(".menu"),
  nav = document.querySelector(".nav");
menu?.addEventListener("click", () => nav.classList.toggle("open"));
nav
  ?.querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((e) => io.observe(e));
document
  .querySelectorAll("[data-year]")
  .forEach((e) => (e.textContent = new Date().getFullYear()));
