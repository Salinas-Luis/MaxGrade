document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    var calendario = new FullCalendar.Calendar(calendarEl, {
      
      initialView: 'dayGridMonth', 
      locale: 'es',               
      headerToolbar: {
        left: 'prev,next today',    
        center: 'title',            
        right: 'dayGridMonth,timeGridWeek,timeGridDay' 
      },

      events: [
        {
          title: 'Reunión Importante',
          start: '2025-10-25' 
        },
        {
          title: 'Entrega de Proyecto',
          start: '2025-10-28T10:00:00', 
          end: '2025-10-28T12:00:00'
        }
      ]
    });

    calendario.render(); 
  });