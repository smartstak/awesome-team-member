/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			<div className="awesome-team-member__picture-wrapper">
				<img 
					className="awesome-team-member__picture"
					src={ attributes.picture } alt={ attributes.name }
					style={ {
						width: attributes.imageWidth + 'px',
						borderRadius: attributes.imageRadius + '%',
					} }
				/>
			</div>
			<div className="awesome-team-member__info">
				<h3
					className="awesome-team-member__name"
					style={ {
						color: attributes.nameColor,
						fontSize: attributes.nameFontSize + attributes.nameFontSizeType,
					} }
				>
					{ attributes.name }
				</h3>
				<p 
				className="awesome-team-member__designation"
					style={ {
						color: attributes.designationColor,
						fontSize: attributes.designationFontSize + attributes.designationFontSizeType,
					} }
				>
					{ attributes.designation }
				</p>
			</div>
		</div>
	);
}
