$(document).ready(function() {

    var videostemp;
    //calling the json file
    $.ajax({
        type : 'GET',
        dataType : 'json',
        url: './assets/data.json',
        success : function(data) {
            for ( let key in data) {
                $('.videos').append(
                    `<div class="col-12">
                        <div class="video-container w-100">
                            <video duration poster>
                                <source src="${data[key].url}" type="video/mp4" />
                            </video>
                        </div>
                        <div class="videoDetails" id="${key}">
                            <div class="info">
                                <h3>${data[key].Name}</h3>
                                <p>${data[key].type}&nbsp;&nbsp;&nbsp;${data[key].view}&nbsp;&nbsp;&nbsp;${data[key].published_data}</p>
                            </div>
                        </div>
                    </div>`
                )
            }

            if (window.location.href.includes('?')) {
                var index = +window.location.href.slice(window.location.href.indexOf('=')+1)
                $('.selectedVideo').append(
                    `
                        <div class="video w-100">
                            <video duration poster autoplay controls>
                                <source src="${data[index].url}" type="video/mp4" />
                            </video>
                        </div>
                        <div class="videoDetails">
                            <div class="info">
                                <h3>${data[index].Name}</h3>
                                <p>${data[index].type}&nbsp;&nbsp;&nbsp;${data[index].view}&nbsp;&nbsp;&nbsp;${data[index].published_data}</p>
                            </div>
                            <div class='buttons'>
                                <a class='share' href=''></a>
                                <a class='like' href=''></a>
                                <a class='dislike' href=''></a>
                            </div>
                        </div>
                    `
                )

                for( let key in data) {
                    if ( data[key].type === data[index].type && key != index) {
                        $('.similarVideos').append(
                            `<div class="col-12">
                                <div class="video-container w-100">
                                    <video duration poster>
                                        <source src="${data[key].url}" type="video/mp4" />
                                    </video>
                                </div>
                                <div class="videoDetails" id="${key}">
                                    <div class="info">
                                        <h3>${data[key].Name}</h3>
                                        <p>${data[key].type}&nbsp;&nbsp;&nbsp;${data[key].view}&nbsp;&nbsp;&nbsp;${data[key].published_data}</p>
                                    </div>
                                </div>
                            </div>`
                            )
                    }
                }
            }
        } 
    });

    $(document).on('click', '.videoDetails' ,function(res) {
        window.location.href = 'view.html?id='+this.id
        console.log(this.id)
    })

    $('.back').click( function () {
        history.back()
    })
})