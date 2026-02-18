# 📱 GUÍA RÁPIDA - WhatsApp Integrado

## ✅ ¿Qué hemos agregado?

### 1. **Botón Flotante de WhatsApp** 📲
- Aparece en la esquina inferior derecha
- Siempre visible mientras navegas
- Con animación de "flotación"
- Click → Abre WhatsApp directo

### 2. **Enlaces en Servicios** 🎯
- Cada servicio (Civil, Laboral, Familia) tiene botón "Consultar"
- Click → Abre WhatsApp con mensaje personalizado

### 3. **Contactos Mejorados** 📞
- Florencia: Click en número → WhatsApp
- Matías: Click en número → WhatsApp
- Email: Click en email → Correo
- Ubicación: Click en dirección → Google Maps

### 4. **Botón CONTACTANOS** 💬
- Header (arriba) → Ahora es WhatsApp
- Footer (abajo) → Redes sociales
- Ambos funcionales e interactivos

## 🔧 CAMBIOS IMPORTANTES

### Números de WhatsApp a Actualizar:

⚠️ **PRIMERO:** Busca y reemplaza en `index.html`:

**Matías Pereyra (IMPORTANTE):**
- Busca: `54299xxxxxxxx`
- Reemplaza por: `54` + código + número (ej: 542991234567)

**Todos los números deben estar en formato:**
- Sin espacios ni guiones
- Con prefijo país (54 para Argentina)
- Sin el 0 inicial del prefijo

### Ejemplo correcto:
```
Phone: (299) 4139178
URL:   542994139178
```

## 🚀 VERIFICACIÓN RÁPIDA

Prueba estos links en tu navegador (deberían abrir WhatsApp):

1. **Botón flotante:**
   `https://wa.me/542994139178?text=Hola%2C%20me%20gustar%C3%ADa%20contactarme%20con%20ustedes`

2. **Servicio Civil:**
   `https://wa.me/542994139178?text=Hola%20Florencia%2C%20me%20interesa%20consultar%20sobre%20derecho%20civil`

3. **Servicio Laboral:**
   `https://wa.me/542994139178?text=Hola%2C%20me%20interesa%20consultar%20sobre%20derecho%20laboral`

4. **Servicio Familia:**
   `https://wa.me/542994139178?text=Hola%2C%20me%20interesa%20consultar%20sobre%20derecho%20de%20familia`

## 📋 CHECKLIST ANTES DE PUBLICAR

- [ ] ¿Actualizaste el número de Matías Pereyra?
- [ ] ¿Probaste todos los enlaces en mobile?
- [ ] ¿Se ve bien el botón flotante?
- [ ] ¿Funciona el botón CONTACTANOS?
- [ ] ¿Se abren los links correctamente?

## 🎨 PERSONALIZACIÓN

### Cambiar color de WhatsApp:
Si quieres cambiar el verde, busca en CSS:
- `#25d366` → Color principal (busca y reemplaza)
- `#1faa4f` → Color hover

Ejemplo:
```css
background-color: #25d366;  /* Verde WhatsApp */
background-color: #1faa4f;  /* Verde oscuro hover */
```

### Cambiar mensajes:
Los mensajes están en las URLs. Éstos están "codificados":
- `%20` = espacio
- `%2C` = coma
- `%C3%A1` = á
- Puedes usar: https://www.urlencode.org/

## 📱 ¿En qué dispositivos funciona?

✅ Desktop (Windows, Mac, Linux)
✅ Mobile (iPhone, Android)
✅ Tablets
✅ Cualquier navegador moderno

## 💡 EJEMPLOS DE USO

### Usuario en Desktop:
1. Hace click en "CONTACTANOS" → Se abre WhatsApp Web
2. Hace click en "Consultar Derecho Civil" → WhatsApp con mensaje específico

### Usuario en Mobile:
1. Hace click en botón flotante → Se abre app WhatsApp
2. Hace click en número de teléfono en footer → Se abre WhatsApp

## ❓ PREGUNTAS FRECUENTES

**P: ¿Necesito código de negocio de WhatsApp?**
R: No, esto usa enlaces directos a WhatsApp Web/App. Para un chatbot completo, sí.

**P: ¿Qué pasa si un usuario no tiene WhatsApp?**
R: Verá "Abrir en WhatsApp Web" o se le pedirá instalar app.

**P: ¿Puedo cambiar el número por defecto?**
R: Sí, busca `542994139178` en todo el HTML y reemplaza.

**P: ¿El botón flotante se ve en mobile?**
R: Sí, pero más pequeño y ajustado al tamaño del pantalla.

## 🆘 SOPORTE TÉCNICO

**Problema:** El botón no se ve
- Solución: Verifica que `tailwind.css` esté cargado en `<head>`

**Problema:** Los links no funcionan
- Solución: Asegúrate que el número tenga formato correcto (sin espacios)

**Problema:** El icono de WhatsApp no aparece
- Solución: Verifica que `LineIcons.2.0.css` esté cargado

---

**¿Dudas?** Revisa `MEJORAS.md` para documentación completa.
**Cambios técnicos?** Consulta `CAMBIOS_TECNICOS.md`

---
**Última actualización:** Febrero 2026
