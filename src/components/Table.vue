<template>
  <div class="main_body p-3">
    <h1 class="bolder">connected devices</h1>
    <p>This is a list of devices that have logged into your account.</p>

    <table class="table table-bordered" id="customers_table">
      <thead>
        <tr>
          <th scope="col">customers</th>
          <th class="hidden-sm" scope="col">IP Address</th>
          <th scope="col">Country</th>
          <th scope="col">Activity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Ahmed</th>
          <td class="hidden-sm">111.144.148</td>
          <td>Saudi Arabia</td>
          <td>login</td>
        </tr>
        <tr>
          <th scope="row">Ahmed</th>
          <td class="hidden-sm">111.144.148</td>
          <td>Saudi Arabia</td>
          <td>login</td>
        </tr>
        <tr>
          <th scope="row">Ahmed</th>
          <td class="hidden-sm">111.144.148</td>
          <td>Saudi Arabia</td>
          <td>login</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
};
</script>