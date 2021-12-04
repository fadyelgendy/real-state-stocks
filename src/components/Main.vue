<template>
  <main>
    <div class="row p-0">
      <Sidebar />
      <div class="col-lg-9 col-md-9 m-0 p-0">
        <SettingForm />
        <TwoFactor />
        <Table />
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Table from "./Table.vue";
import SettingForm from "./SettingForm.vue";
import TwoFactor from "./TwoFactor.vue";

export default {
  name: "Main",
  props: {
    msg: String,
  },
  components: {
    Sidebar,
    Table,
    SettingForm,
    TwoFactor,
  },
};
</script>
