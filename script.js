document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn-minus').forEach(function(button) {
        button.addEventListener('click', function() {
            let input = this.closest('.input-group').querySelector('input');
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
            }
        });
    });

    document.querySelectorAll('.btn-plus').forEach(function(button) {
        button.addEventListener('click', function() {
            let input = this.closest('.input-group').querySelector('input');
            let value = parseInt(input.value);
            input.value = value + 1;
        });
    });
});
