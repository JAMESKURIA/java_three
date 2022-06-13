$(document).ready(function () {
  getPeopleData();
  savePeople();
  getClick();
  deleteUser();
});

function savePeople() {
  $("#save").click(function () {
    var name = $("#name").val();

    if (name === "") {
      bootbox.alert("Name is mandatory");
      return;
    }

    // var formData = new FormData($("#person-form"))
    var data = $("#person-form").serialize();

    $.ajax({
      type: "POST",
      url: "saveUser",
      data,
    })
      .done((s) => {
        bootbox.alert(`${name} created successfully`);
        getPeopleData();
      })
      .fail((xhr, error) => {
        bootbox.alert(xhr.responseText);
      });
  });
}

function getPeopleData() {
  $.ajax({
    type: "GET",
    url: "getPeopleData",
  })
    .done(function (s) {
      $("#peoplesTable").DataTable().destroy;
      $("#peoplesTable tbody").empty();

      $.each(s, (i, item) => {
        $("#peoplesTable tbody").append(
          `
        <tr>
          <td>${item.personId}</td>
          <td>${item.name}</td>
          <td>${item.phonenumber}</td>
          <td>${item.idnumber}</td>
          <td>
            <input class="edit-field" type="hidden" id="edit-user" name="id" value="${item.personId}"></input>
            <button class="btn btn-outline-primary btn-sm edit-btn">
              <i class="fa fa-edit"></i>
            </button>
          </td>
          <td>
            <input  class="delete-field"  type="hidden" id="delete-user" name="id" value="${item.personId}"></input>
            <button class="btn btn-outline-danger btn-sm delete-btn">
              <i class="fa fa-trash-o"></i>
            </button>
          </td>
        </tr>
        
        `
        );
      });

      $("#peoplesTable").DataTable();
    })
    .fail((xhr, error) => {});
}

function getClick() {
  $("#peoplesTable").on("click", ".edit-btn", function () {
    const personId = $(this).closest("tr").find(".edit-field").val();

    // bootbox.alert(`Clicked id ${personId}`);

    $.ajax({
      type: "GET",
      // url: "editPerson/" + personId,
      url: `editPerson/${personId}`,
    })
      .done(({ name, idnumber, phonenumber }) => {
        $("#name").val(name);
        $("#idnumber").val(idnumber);
        $("#phonenumber").val(phonenumber);
      })
      .fail((xhr, error) => {
        bootbox.alert(xhr.responseText);
      });
  });
}

function deleteUser() {
  $("#peoplesTable").on("click", ".delete-btn", function (s) {
    var id = $(this).closest("tr").find("#delete-user").val();

    bootbox.confirm(
      "Are you sure want to delete this Person?",
      function (result) {
        if (result) {
          $.ajax({
            type: "GET",
            url: `deleteperson/${id}`,
          })
            .done(function (s) {
              getPeopleData();
              bootbox.alert("Person deleted successfully!");
            })
            .fail(function (xhr, error) {
              bootbox.alert(xhr.responseText);
            });
        }
      }
    );
  });
}
