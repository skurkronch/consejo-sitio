/* Configuración del sitio.
   formEndpoint: adónde se mandan los formularios (sitio y toolkit).
   Hoy usa FormSubmit, que reenvía cada envío por correo. La primera vez llega un correo
   de activación a la cuenta; después de activarlo, FormSubmit da un alias aleatorio
   para reemplazar el correo de aquí abajo y que no quede visible en el código. */
window.CDC_CONFIG = {
  formEndpoint: "https://formsubmit.co/ajax/cesarmz.vg@gmail.com"
};
