//(function (){
    function actualizarhora (){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDay(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
            
        var pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nobiembre', 'Diciembre'];
       
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia; 
        pMes.textContent = meses[mes];
        pYear.textContent = year;

        if(horas >= 12){
            ampm = 'PM';
        }
        else{
            ampm = 'AM';
        }

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if(minutos < 10 ) {minutos = "0" + minutos};
        if(segundos < 10 ) {segundos = "0" + segundos};

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;

    };

    actualizarhora();
    var intervalo = setInterval(actualizarhora, 1000);


class Calendar {
    constructor(id){
        this.elCalendar = document.getElementById(id);
        this.showTemplate();
        this.generateDate(moment());
    }

    showTemplate(){
        this.elCalendar.innerHTML = this.getTemplate();

    }


    getTemplate(){
        let template = `
        
        <div class="calendar_header">
        <button type="button" class="control control--prev"><</button>
        <span class="month-name"> mayo </span>
        <button type="button" class="control control--next">></button>
    </div>
    <div class="calendar_body">
      <div class="grid">
          <div class="grid_header">
               <span class="grid__cell grid__cell--gh">Dom</span>
               <span class="grid__cell grid__cell--gh">Lun</span>
               <span class="grid__cell grid__cell--gh">Mar</span>
               <span class="grid__cell grid__cell--gh">Mie</span>
               <span class="grid__cell grid__cell--gh">Jue</span>
               <span class="grid__cell grid__cell--gh">Vie</span>
               <span class="grid__cell grid__cell--gh">Sab</span>
          </div>
          <div class="grid_body">
            <span class="grid__cell grid__cell--gd grid__cell--selected">1</span>
            <span class="grid__cell grid__cell--gd">2</span>
            <span class="grid__cell grid__cell--gd">3</span>
            <span class="grid__cell grid__cell--gd">4</span>
            <span class="grid__cell grid__cell--gd">5</span>
            <span class="grid__cell grid__cell--gd">6</span>
            <span class="grid__cell grid__cell--gd">7</span>
            <span class="grid__cell grid__cell--gd">8</span>
            <span class="grid__cell grid__cell--gd">9</span>
            <span class="grid__cell grid__cell--gd">10</span>
            <span class="grid__cell grid__cell--gd">11</span>
            <span class="grid__cell grid__cell--gd">12</span>
            <span class="grid__cell grid__cell--gd">13</span>
            <span class="grid__cell grid__cell--gd">14</span>
            <span class="grid__cell grid__cell--gd">15</span>
            <span class="grid__cell grid__cell--gd">16</span>
            <span class="grid__cell grid__cell--gd">17</span>
            <span class="grid__cell grid__cell--gd">18</span>
            <span class="grid__cell grid__cell--gd">19</span>
            <span class="grid__cell grid__cell--gd">20</span>
            <span class="grid__cell grid__cell--gd">21</span>
            <span class="grid__cell grid__cell--gd">22</span>
            <span class="grid__cell grid__cell--gd">23</span>
            <span class="grid__cell grid__cell--gd">24</span>
            <span class="grid__cell grid__cell--gd">25</span>
            <span class="grid__cell grid__cell--gd">26</span>
            <span class="grid__cell grid__cell--gd">27</span>
            <span class="grid__cell grid__cell--gd">28</span>
            <span class="grid__cell grid__cell--gd">29</span>
            <span class="grid__cell grid__cell--gd">30</span>
            <span class="grid__cell grid__cell--gd">31</span>
            <span class="grid__cell grid__cell--gd">32</span>
            <span class="grid__cell grid__cell--gd">33</span>
            <span class="grid__cell grid__cell--gd grid__cell--disable">34</span>
            <span class="grid__cell grid__cell--gd grid__cell--disable">35</span>
          </div>
      </div>
    </div>


        `;
    
        return template;
    }
 
    generateDate(monthToShow = moment()){
        if(!moment.isMoment(monthToShow)){
            return null;
        }
        
        let dateStart = moment(monthToShow).startOf('month');
        let dateEnd = moment(monthToShow).endOf('month');


        console.log( dateEnd, dateStart);

    }
}

   
