$(document).ready(function(){
    $.ajax({
        url: 'https://example.com/api/mahasiswa',
        type: 'GET',
        dataType: 'json',
        success: function(response){
            $.each(response, function(i, mahasiswa){
                $('#data-mahasiswa tbody').append(
                    '<tr>'+
                        '<td>'+mahasiswa.nama+'</td>'+
                        '<td>'+mahasiswa.nim+'</td>'+
                        '<td>'+mahasiswa.jurusan+'</td>'+
                    '</tr>'
                );
            });
        },
        error: function(xhr, status, error){
            console.log(xhr.responseText);
        }
    });
});
