// Projet StageDigital par Lamyae Jaouli - 2025/2026
function ajouter(){
 let nom = document.getElementById('nom').value;
 let entreprise = document.getElementById('entreprise').value;
 if(!nom ||!entreprise){ alert('3amri smitk w entreprise!'); return; }
 let demandes = JSON.parse(localStorage.getItem('demandes')||'[]');
 demandes.push({
  nom: nom,
  entreprise: entreprise,
  sujet: document.getElementById('sujet').value,
  status: 'en_attente',
  date: new Date().toLocaleDateString(),
  auteur: 'Lamyae Jaouli'
 });
 localStorage.setItem('demandes', JSON.stringify(demandes));
 document.getElementById('nom').value='';
 document.getElementById('entreprise').value='';
 document.getElementById('sujet').value='';
 afficher();
}

function afficher(){
 let demandes = JSON.parse(localStorage.getItem('demandes')||'[]');
 let liste = document.getElementById('liste');
 if(!liste) return;
 liste.innerHTML = '<h2 class="font-bold mb-2">Suivi des demandes ('+demandes.length+') - Par Lamyae Jaouli:</h2>' + demandes.map((d,i)=>`
  <div class="border p-3 mb-2 rounded flex justify-between bg-gray-50">
   <div><b>${d.nom}</b> - ${d.entreprise}<br><small>${d.date} - ${d.status}</small></div>
   <button onclick="valider(${i})" class="bg-green-500 text-white px-3 rounded h-8 text-sm">Valider</button>
  </div>`).join('');
}

function valider(i){
 let demandes = JSON.parse(localStorage.getItem('demandes'));
 demandes[i].status='validée par Lamyae Jaouli';
 localStorage.setItem('demandes', JSON.stringify(demandes));
 afficher();
}

document.addEventListener('DOMContentLoaded', afficher);
