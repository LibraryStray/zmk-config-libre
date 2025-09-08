module.exports = {
  params: {
    designator: 'Stab_2u',
    side: 'F'
  },
  
  body: p => `
    (module STAB_MX_2u (layer F.Cu)
      (descr "Footprint for Cherry Clip/Screw in type stabilizers, 2u")

      ${p.at /* parametric position */} 

      ${''/* footprint reference */} 
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value STAB_MX_2u (at 0 12 15) (layer F.SilkS) (effects (font (size 1 1) (thickness 0.15))))


      ${''/* stabilizers */}

      (fp_line (start -19.05 -9.525) (end -19.05 9.525) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
      (fp_line (start -19.05 -9.525) (end 19.05 -9.525) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
      (fp_line (start -19.05 9.525) (end 19.05 9.525) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
      (fp_line (start -7 -7) (end -5 -7) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
      (fp_line (start -7 -5) (end -7 -7) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
      (fp_line (start -7 7) (end -7 5) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
      (fp_line (start -5 7) (end -7 7) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
      (fp_line (start 5 -7) (end 7 -7) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
      (fp_line (start 5 7) (end 7 7) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
      (fp_line (start 7 -7) (end 7 -5) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
      (fp_line (start 7 7) (end 7 5) (stroke (width 0.12) (type solid)) (layer Dwgs.User))
      (fp_line (start 19.05 -9.525) (end 19.05 9.525) (stroke (width 0.12) (type solid)) (layer Dwgs.User))

      (fp_line (start -15.28125 -5.499999) (end -15.28125 7.500001) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_line (start -14.78125 -5.999999) (end -9.03125 -5.999999) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_line (start -14.78125 8.000001) (end -9.03125 8.000001) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_line (start -8.53125 -5.499999) (end -8.53125 7.500001) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_line (start 8.53125 -5.499999) (end 8.53125 7.500001) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_line (start 9.03125 -5.999999) (end 14.780039 -5.999999) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_line (start 9.03125 8.000001) (end 14.78125 8.000001) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_line (start 15.280039 -5.499999) (end 15.28125 7.500001) (stroke (width 0.05) (type solid)) (layer Eco2.User))

      (fp_arc (start -14.78125 -5.499999) (end -14.78125 -5.999999) (angle -90) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_arc (start -14.78125 7.500001) (end -15.28125 7.500001) (angle -90) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_arc (start -9.03125 -5.499999) (end -8.53125 -5.499999) (angle -90) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_arc (start -9.03125 7.500001) (end -9.03125 8.000001) (angle -90) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      
      (fp_arc (start 9.03125 -5.499999) (end 8.53125 -5.499999) (angle 90) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_arc (start 9.03125 7.500001) (end 8.53125 7.500001) (angle -90) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_arc (start 14.780039 -5.499999) (end 15.280039 -5.499999) (angle -90) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      (fp_arc (start 14.78125 7.500001) (end 14.78125 8.000001) (angle -90) (stroke (width 0.05) (type solid)) (layer Eco2.User))
      
      (fp_circle (center -11.90625 -6.985) (end -9.90625 -6.985) (stroke (width 0.12) (type solid)) (fill none) (layer B.CrtYd))
      (fp_circle (center 11.90625 -6.985) (end 13.90625 -6.985) (stroke (width 0.12) (type solid)) (fill none) (layer B.CrtYd))

      (pad "" np_thru_hole circle (at -11.90625 -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -11.90625 8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at 11.90625 -6.985) (size 3.048 3.048) (drill 3.048) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at 11.90625 8.255) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
    )
  `
}
