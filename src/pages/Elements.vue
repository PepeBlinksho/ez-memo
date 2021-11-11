<template>
  <div class="elements">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <h1>Elements</h1>
          <h2>Elements</h2>
          <h3>Elements</h3>
          <h4>Elements</h4>
          <h5>Elements</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button type="button" class="btn btn-primary m-4">
            <div class="corner left_top"></div>
            <div class="corner left_bottom"></div>
            <div class="corner right_top"></div>
            <div class="corner right_bottom"></div>
            Primary
          </button>
          <button type="button" class="btn btn-secondary m-4">
            <div class="corner left_top"></div>
            <div class="corner left_bottom"></div>
            <div class="corner right_top"></div>
            <div class="corner right_bottom"></div>
            Secondary
          </button>
          <button type="button" class="btn btn-success m-4">
            <div class="corner left_top"></div>
            <div class="corner left_bottom"></div>
            <div class="corner right_top"></div>
            <div class="corner right_bottom"></div>
            Success
          </button>
          <button type="button" class="btn btn-danger m-4" disabled>
            <div class="corner left_top"></div>
            <div class="corner left_bottom"></div>
            <div class="corner right_top"></div>
            <div class="corner right_bottom"></div>
            Danger
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Check me out</label
              >
            </div>
            <div class="mb-3 form-check">
              <input type="radio" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1"
                >Check me out</label
              >
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Example textarea</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-6">
          <h1>A EZMEMO UI PROJECT</h1>
          <p>Think rich, look poor.</p>
          <p>When you come to a roadblock, take a detour.</p>
          <p class="text-success">
            When it is dark enough, you can see the stars.
          </p>
          <p class="text-danger">
            Victory is sweetest when you’ve known defeat.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Elements",
};
</script>
