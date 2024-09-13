<script setup>
onMounted(() => {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    object["site"] = "getkoala.ai";
    const json = JSON.stringify(object);

    result.innerHTML = "Submitting...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.classList.add("text-green-500");
          // result.innerHTML = json.message;
          result.innerHTML = "Thank you for subscribing!";
        } else {
          console.log(response);
          result.classList.add("text-red-500");
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
});
</script>

<template>
  <!-- To make this contact form work, create your free access key from https://web3forms.com/
     Then you will get all form submissions in your email inbox. -->
  <div class="formmm">
    <br/>
    <br/>
    <br/>
     <h1 class="text-5xl lg:text-6xl xl:text-6xl font-bold">
        Koala.
      </h1>
      <br/>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <b><span class="text-primary">Accessible</span> <span class="font-bold text-slate-400">Healthcare</span></b> for the 21st Century.
      </p>
      <p>Coming Soon.</p>

      <br/>
      <br/>
      <br/>
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    id="form"
    class="needs-validation flex items-center space-x-4"
    novalidate
  >
    <input type="hidden" name="access_key" value="7925f9dd-b19c-4de3-acfc-31e8981a13fd" />
    <!-- Create your free access key from https://web3forms.com/ -->
    <input
      type="checkbox"
      class="hidden"
      style="display: none"
      name="botcheck"
    />
    <div class="flex-grow">
      <label for="email_address" class="sr-only">Email</label>
      <input
        id="email_address"
        type="email"
        placeholder="Email"
        name="email"
        required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-400 rounded outline-none focus:ring-4 border-gray-100 ring-gray-100"
      />
    </div>
    <button
      type="submit"
      class="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-300"
    >
      Stay Updated
    </button>
  </form>
  <div id="result" class="mt-3 text-center"></div>
  </div>
</template>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid ~ .empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}

.formmm {
  max-width: 600px;
  margin: auto;
  text-align: center;
}
</style>
