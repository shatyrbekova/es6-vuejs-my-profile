
Vue.config.devtools = true;

new Vue(
    {
        el: '#profile-page',
        data: {
            create_new_post:'',
            myProfile: {
                details: {
                    name: 'Pierfilippo',
                    surname: 'Baudo',
                    pic: 'https://www.focus.it/site_stored/imgs/0003/042/nerd2.1020x680.jpg',
                },
                posts: [
                    {
                        text: "C'è nessuno?",
                        mediaPath: 'https://acqualete.it/wp-content/uploads/2015/09/La-Particella-di-Sodio-1.jpg',
                        date: '26-05-2021'
                    }, {
                        text: "Vi ricordate di Windows XP? Che ricordi, non ce la faccio...",
                        mediaPath: 'https://upload.wikimedia.org/wikipedia/it/d/d3/Colline_%28immagine%29.jpg',
                        date: '01-06-2021'
                    }, {
                        text: "Mi sono iscritto in palestra!",
                        date: '16-06-2021'
                    },
                    {
                        text: 'Vi presento il mio amico Mimmo',
                        mediaPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Supernerd_%283262512306%29.jpg/1024px-Supernerd_%283262512306%29.jpg',
                        date: '17-06-2021'
                    }
                ]
            }
        },
        methods:{

            //Per creare un nuovo msg, creiamo una funzione con push.
            addNewPost:function(){

                    let newObject={
                        text: this.create_new_post,
                        date: this.getCurrentDateTime(),
                    },
    
                    this.myProfile.posts.push(newObject);
                    this.create_new_post='';
                
             },  

             getCurrentDateTime: function(){ //Per avere la datetime  usiamo day.js
            
                //creiamo una variabile costante
                const dateTimeNow = dayjs();
                //scriviamo il seguente codice, applicando format 
                return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
    
              },  
           
     }
    }
 
);

//* Creazione di un nuovo messaggio
//* Con un click su “CREA” viene pushato un nuovo post nell’array posts,
//*  con il testo della textarea.