const generateHtml = function({fullName, location, bio, linkedin, gitHub, genre}) {
    return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

        <title>Document</title>
    </head>
    <body>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${fullName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
            <p class="card-text">${bio}</p>
            <a href="https://www.imdb.com/search/title/?genres=${genre}&explore=title_type,genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=3396781f-d87f-4fac-8694-c56ce6f490fe&pf_rd_r=DSRNN04J7VXZA6029FS3&pf_rd_s=center-1&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_pr1_i_1
            " class="card-link">Favorite Genre</a>
            <a href="${gitHub}" class="card-link">GitHub</a>
            <a href="${linkedin}" class="card-link">LinkedIn</a>
            </div>
        </div>    
    </body>
    </html>
    `)
}
module.exports = generateHtml;