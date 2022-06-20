/**
 * Uploads image and get URL
 *
 * @class ImageUpload
 * @extends {HTMLElement}
 */
class ImageUpload extends HTMLElement {
  constructor() {
    super();
    // the only way to implement js in RS
    this._shadowRoot = this.attachShadow({ mode: "open" });
    const clientid = "9516b72594d77fc";
    const endpoint = "https://api.imgur.com/3/image";
    const dropzoneStyle = `
    
      width: 100%;
      height: 100%;
      display:flex;
      flex-direction:column;
      gap:8px;
      justify-content:center;
      align-items:center;
      transition:1s;
    `;
    const dropzoneStyleDragging = `
      width: 100%;
      height: 100%;
      display:flex;
      flex-direction:column;
      gap:8px;
      justify-content:center;
      align-items:center;
      transition:2s;
      background:#4b93db;
      `;

    const inputButtonStyle = `
      cursor:pointer;
      font-weight:bold;
      padding:15px;
      background:white;
      box-shadow:0px 0px 8px 2px #ededed;
      color:#4b93db;
    `;

    const uploadingIndicationStyle = `
        font-weight: bold;
        color: #2b8aef;
        padding: 12px;
        margin-top: 10px;
        font-size: 20px;
        text-align: center;
      `;

    /**
     * Handle file drag over
     *
     */
    const handleDragOver = (event, shadow) => {
      event.preventDefault();
      shadow
        .querySelector("#dropZone")
        ?.setAttribute("style", dropzoneStyleDragging);
    };
    /**
     * Handle file drag leave
     *
     */
    const handleDragLeave = (event, shadow) => {
      event.preventDefault();
      shadow.querySelector("#dropZone")?.setAttribute("style", dropzoneStyle);
    };
    /**
     * Handle file drop
     *
     */
    const handleDropFileChange = (event, shadow) => {
      event.preventDefault();
      shadow.querySelector("#dropZone")?.setAttribute("style", dropzoneStyle);
      post(event.dataTransfer.items[0].getAsFile(), shadow);
    };
    /**
     * Handles file selection
     *
     */
    const handleFileChange = (event, shadow) => {
      event.preventDefault();
      post(event.target.files[0], shadow);
    };

    function post(file, shadow) {
      const uploading = shadow.querySelector("#uploading");
      uploading.innerHTML = "Uploading...";
      uploading.style.display = "block";
      var data = new FormData();
      data.append("image", file);
      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", endpoint, true);
      xhttp.setRequestHeader("Authorization", "Client-ID " + clientid);
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 200 && this.status < 300) {
            var res = "";
            try {
              res = JSON.parse(this.responseText);
            } catch (err) {
              res = this.responseText;
            }
            if (res.success === true) {
              uploading.style.display = "block";
              var get_link = res.data.link.replace(/^http:\/\//i, "https://");
              var content =
                "<form>Your selected image: " +
                '<input type="hidden" name="idhash" class="image-url" value="10f066701464ae9092702db94fc16ea1387b651d93685d4e1cb9b2090736965739f6794ed4ec8f48f1747c655ab03371ce0055dcd88e98fa689f8b9603f7dc27a0df68f42eab3651" />' +
                '<input type="hidden" name="uri" class="image-url" value="Default:Search" />' +
                '<input type="hidden" name="image" class="image-url" value="' +
                get_link +
                '"/>' +
                '<img class="img-to-upload"  style="height: 250px ;object-fit: contain; width: 100% !important; background: whitesmoke; padding: 8px 0px;" alt="Imgur-Upload" src="' +
                get_link +
                '"/>' +
                `<button type="submit" style=" align-items: center;background-color: #007bff;
                    border: 2px dashed #fff;
                    text-shadow: 0 0 1px rgb(0 0 0 / 38%);
                    font-weight: 600;
                    height: 31px;
                    cursor:pointer;
                    display: flex;
                    justify-content: center;
                    color: white !important;
                    transition: 0.4s;
                    font-size: medium;
                    min-height: 4vh;
                    border-radius: 4px;
                    width: 100%;
                    margin-top: 10px;
                    box-shadow: 0px 0px 10px 1px #bebebe;" class="btn searchBtn">` +
                'Start visual search <i class="fa fa-search" style="margin-left: 5px;"></i>' +
                "</button>" +
                '<input type="hidden" name="secondid" class="image-url" value="10f066701464ae9092702db94fc16ea1387b651d93685d4e1cb9b2090736965739f6794ed4ec8f48f1747c655ab03371ce0055dcd88e98fa689f8b9603f7dc27a0df68f42eab3651" />' +
                "</form>";
              uploading.innerHTML = content;
            }
          } else {
            uploading.style.display = "none";
          }
        }
      };
      xhttp.send(data);
      xhttp = null;
    }

    // Initialize dropzone
    const dropZone = document.createElement("div");
    dropZone.id = "dropZone";
    dropZone.style = dropzoneStyle;
    dropZone.addEventListener("dragleave", (ev) => {
      handleDragLeave(ev, this._shadowRoot);
    });
    dropZone.addEventListener("dragover", (ev) => {
      handleDragOver(ev, this._shadowRoot);
    });
    dropZone.addEventListener("drop", (ev) => {
      handleDropFileChange(ev, this._shadowRoot);
    });

    // Initialize label - input file sellect button
    const indicationTextA = document.createElement("h2");
    const indicationUploading = document.createElement("div");
    const labelInput = document.createElement("label");
    const inputElement = document.createElement("input");
    indicationTextA.innerHTML = "Drag & drop or";
    indicationUploading.id = "uploading";
    indicationUploading.style = uploadingIndicationStyle;
    indicationUploading.style.display = "none";
    indicationUploading.innerHTML = "Uploading...";
    labelInput.innerHTML = "Select an image file";
    labelInput.style = inputButtonStyle;
    inputElement.type = "file";
    inputElement.accept = "image/*";
    inputElement.style.display = "none";
    inputElement.addEventListener("change", (ev) => {
      handleFileChange(ev, this._shadowRoot);
    });

    // Image preview
    const imageElement = document.createElement("img");
    imageElement.id = "image-preview";

    // Append elements
    labelInput.append(inputElement);
    dropZone.append(indicationTextA);
    dropZone.append(labelInput);
    dropZone.append(indicationUploading);
    dropZone.append(imageElement);
    this._shadowRoot.append(dropZone);
  }
}

customElements.define("upload-image", ImageUpload);
