/* Configuración del sitio.
   formEndpoint: adónde se mandan los formularios (sitio y toolkit).
   Hoy usa FormSubmit, que reenvía cada envío por correo. La primera vez llega un correo
   de activación a la cuenta; después de activarlo, FormSubmit da un alias aleatorio
   para reemplazar el correo de aquí abajo y que no quede visible en el código. */
/* web3formsKey: si tiene valor, los formularios se mandan por Web3Forms en lugar de FormSubmit.
   La llave se pide gratis en https://web3forms.com con cesarmz.vg@gmail.com; es pública por diseño. */
window.CDC_CONFIG = {
  formEndpoint: "https://formsubmit.co/ajax/cesarmz.vg@gmail.com",
  web3formsKey: "446a6368-5c44-49d1-af99-385f438be824"
};
