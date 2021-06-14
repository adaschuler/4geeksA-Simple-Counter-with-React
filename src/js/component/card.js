/* renderizar cada segundo el componente */

function SecondsCounter(propcounter) {
    return <i class="fa fa-clock-o" aria-hidden="true"></i> {propcounter.seconds};
}
SecondsCounter.propTypes={
propcounter:PropTypes.string
};
function Appcounter() {
    return (
        <SecondsCounter seconds={
            var i= 0;
    var contador = document.getElementById("number");
    window.setInterval(function () {
        contador.innerHTML = i;
        i++;
    }, 1000);
} />
    );
}



