import React from "react";
import Typical from "react-typical";
import "./Slider.css";
export default function Slider() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  // let intervalfunc=()=>{
  //     let a='Robolution Club'
  //     let b=''
  //     for( let i=0;i<a.length;i++){
  //       sleep(1000);

  //       let r=b+a[i]
  //       // b.concat(a[i])

  //       // let y=r
  //       let c=document.body.getElementsByClassName('text')
  //       console.log(r)

  //       // c[0].textContent="waduuu"
  //       c[0].textContent=`${r}`
  //     }

  //   }
  //   // intervalfunc()

  //   setInterval(()=>{
  //     intervalfunc()

  //   },1000)

  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
          aria-hidden="true"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active ">
          <img
            src="https://thumbs.dreamstime.com/b/random-numbers-abstract-shapes-digital-tech-innovation-concept-artificial-neural-networks-big-data-150474741.jpg"
            className=" Slider-img"
            alt="not"
          />
          <div className="text">
            <Typical
              steps={["Robolution Club", 3000, "#CreateSomethingNew",2000,]}
              // steps={["", 1000, "wdw", 500]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
          <button type="button" class="btn btn-outline-light  btn-lg">
            SEE MORE
          </button>
        </div>
        <div class="carousel-item">
          <img
            className="Slider-img-2"
            src="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
            alt="..."
          />
          <button type="button" class="btn btn-outline-light  btn-lg">
            SEE MORE
          </button>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}