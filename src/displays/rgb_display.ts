import {ColorInfoDisplay} from '../color_info_display'
import {ColorMatch} from '../color_extractor'
import {clamp, number, func} from './display_helper'

const formatNumber = val => 
    number(clamp(val, 0, 255), 3)

/**
 * Displays the RGB value of a color.
 */
export default new class RgbDisplay implements ColorInfoDisplay {
    name = 'rgb';

    display(match: ColorMatch) {
        const {r, g, b} = match.color.toRgb()
        return func('rgb', formatNumber(r), formatNumber(g), formatNumber(b))
    }
}