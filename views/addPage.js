const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div class="form-group">
      <label for="author" class="col-sm2 control-label">Author Name</label>
      <div>
        <input id="author" name="author" type="text" class="form-control"/>
      </div>
    </div>
    
    <div class="form-group">
      <label for="email">E-mail Address</label>
      <div>
        <input id="email" name="email" type="email" class="form-control"/>
      </div>
    </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>
      <label for="content">Content</label>
      <div>
        <textarea id="content" name="content" class="form-control"></textarea>
      </div>
    </div>
    
    <div>
      <label for="status">Status</label>
      <div>
        <input id="status" name="status" type="text" class="form-control"/>
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);