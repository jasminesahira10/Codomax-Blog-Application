document.getElementById("blogForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let title = document.getElementById("blogTitle").value;
    let author = document.getElementById("authorName").value;

    alert("Blog published successfully by " + author + "!");
});