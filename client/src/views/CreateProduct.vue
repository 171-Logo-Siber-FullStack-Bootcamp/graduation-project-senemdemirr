<template>
  <div>
    <form v-on:submit.prevent="postData()" enctype="multipart/form-data" class="form-group" >
    
      <label for="fname">Product Name:</label><br />
      <input type="text" id="fname" name="fname" v-model="form.name" /><br />
      <label for="lname">Product Price:</label><br />
      <input type="number" id="lname" name="lname"  v-model="form.price"/><br /><br />
      <label for="lname">Product Category:</label><br />
      <input type="text" id="lname" name="lname" v-model="form.category"/><br /><br />
      <label for="lname">Product Description:</label><br />
      <input type="text" id="lname" name="lname" v-model="form.description"/><br /><br />
      <label for="lname">Product Image:</label><br />

      <input type="file" @change="onFileChage" /><br /><br />
      <input type="submit" @click="upload" value="Submit" />

    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default{
    methods: {
        postData() {
            axios.post("http://localhost:3000/products", this.form)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        },

        onFileChage(e) {
            const uploadedFile = e.target.files[0];
            this.uploadedFile = uploadedFile
            this.form.image = `/${uploadedFile.name}`
        },

        upload() {
            
            const formData = new FormData();
            formData.append("file", this.uploadedFile);

            axios.post("http://localhost:3000/upload", formData)
            .then((res) => {
                console.log(res)
            })
            .catch((err) =>{
                console.log(err)
            })
        }
    },
    
    data() {
        return {
            
            form: {
                name: "",
                price: "",
                category: "",
                description: "",
                image: this.uploadedFile
            },
    
            uploadedFile: null
        }
    }
}
</script>