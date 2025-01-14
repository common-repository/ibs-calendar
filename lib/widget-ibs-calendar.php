<?php

class IBS_WCalendar extends WP_Widget {

    public function __construct() {
        $widget_ops = array(
            'class' => 'ibs_wcalendar',
            'description' => 'A widget to display a full calendar'
        );

        parent::__construct(
                'ibs_wcalendar', 'IBS Calendar', $widget_ops
        );
    }

    public function form($instance) {
        $widget_defaults = array(
            'title' => 'IBS Calendar',
            'legend' => 'no',
            'list_max' => 50,
            'list_repeat' => "no",
            'list_past' => "no",
            'ibs_events' => "no",
            'cal_height' => 300,
            'has_list' => 'none',
            'lst_height' => 300,
        );

        $instance = wp_parse_args((array) $instance, $widget_defaults);
        $args = get_option('ibs_calendar_options');
        ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>"><?php echo'Title'; ?></label>
            <input type="text" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" class="widefat" value="<?php echo esc_attr($instance['title']); ?>"/>
        </p>
        <p></p>
        <div class="widefat"><label for="<?php echo $this->get_field_id('has_list'); ?>"><span  style="display:inline-block; width:100px;"><?php echo 'List events'; ?></span>
                <select id="<?php echo $this->get_field_id('has_list'); ?>" name="<?php echo $this->get_field_name('has_list'); ?>" >
                    <option value="none" <?php if ($instance['has_list'] === 'none') echo 'selected'; ?> >No list</option>
                    <option value="show" <?php if ($instance['has_list'] === 'show') echo 'selected'; ?> >Show list</option>
                    <option value="hide" <?php if ($instance['has_list'] === 'hide') echo 'selected'; ?> >Hide list</option>
                </select>
            </label></div>
        <p></p>
        <div class="widefat"><label for="<?php echo $this->get_field_id('legend'); ?>"><span  style="display:inline-block; width:100px;"><?php echo 'Show legend'; ?></span>
                <input type="checkbox" id="<?php echo $this->get_field_id('legend'); ?>" name="<?php echo $this->get_field_name('legend'); ?>" <?php echo esc_attr($instance['legend']) === 'yes' ? 'checked' : ''; ?> value="yes">
            </label></div>
        <p></p>

        <div class="widefat"><label for="<?php echo $this->get_field_id('list_max'); ?>"><span  style="display:inline-block; width:100px;"><?php echo 'List max events'; ?></span>
                <input type="number" min=1 max=100 id="<?php echo $this->get_field_id('list_max'); ?>" name="<?php echo $this->get_field_name('list_max'); ?>"  value="<?php echo esc_attr($instance['list_max']); ?>">
            </label></div>
        <p></p>

        <div class="widefat"><label for="<?php echo $this->get_field_id('list_past'); ?>"><span  style="display:inline-block; width:100px;"><?php echo 'List past events'; ?></span>
                <input type="checkbox" id="<?php echo $this->get_field_id('list_past'); ?>" name="<?php echo $this->get_field_name('list_past'); ?>"  <?php echo esc_attr($instance['list_past']) === 'yes' ? 'checked' : ''; ?> value="yes">
            </label></div>
        <p></p>

        <div class="widefat"><label for="<?php echo $this->get_field_id('list_repeat'); ?>"><span  style="display:inline-block; width:100px;"><?php echo 'List repeat events'; ?></span>
                <input type="checkbox" id="<?php echo $this->get_field_id('list_repeat'); ?>" name="<?php echo $this->get_field_name('list_repeat'); ?>"  <?php echo esc_attr($instance['list_repeat']) === 'yes' ? 'checked' : ''; ?>  value="yes">
            </label></div>
        <p></p>
        <div class="widefat"><label for="<?php echo $this->get_field_id('ibs_events'); ?>"><span  style="display:inline-block; width:100px;"><?php echo 'Show IBS Events'; ?></span>
                <input type="checkbox" id="<?php echo $this->get_field_id('ibs_events'); ?>" name="<?php echo $this->get_field_name('ibs_events'); ?>"  <?php echo esc_attr($instance['ibs_events']) === 'yes' ? 'checked' : ''; ?>  value="yes">
            </label></div>
        <p></p>
        <div class="widefat"><label for="<?php echo $this->get_field_id('cal_height'); ?>"><span  style="display:inline-block; width:100px;"><?php echo 'Calendar height'; ?></span>
                <input type="text" size="6" id="<?php echo $this->get_field_id('cal_height'); ?>" name="<?php echo $this->get_field_name('cal_height'); ?>"  value="<?php echo esc_attr($instance['cal_height']); ?>">
                null, auto, css eg: 800px</label></div>
        <p></p>
        <div class="widefat"><label for="<?php echo $this->get_field_id('lst_height'); ?>"><span  style="display:inline-block; width:100px;"><?php echo 'List height'; ?></span>
                <input type="text"  size="6" id="<?php echo $this->get_field_id('lst_height'); ?>" name="<?php echo $this->get_field_name('lst_height'); ?>" value="<?php echo esc_attr($instance['lst_height']); ?>">
                null, auto, css eg: 800px</label></div>
        <p></p>
        <div class="widefat"><label><?php echo '<strong>Feeds to show</strong>'; ?></label></div>
        <p></p>
        <?php
        for ($feed = 1; $feed <= $args['feedCount']; $feed++) {
            $curr_feed = "feed_" . $feed;
            if (isset($args['feeds'][$curr_feed]['name']) && $args['feeds'][$curr_feed]['name'] !== '') {
                $name = $args['feeds'][$curr_feed]['name'];
            } else {
                $name = $curr_feed;
            }
            $fn = $this->get_field_name($curr_feed);
            $ln = $this->get_field_id($curr_feed);
            $checked = isset($instance[$curr_feed]);
            $checked = $checked ? 'checked' : '';
            echo "<div class='widefat' style='margin-left:100px;' ><label for='$ln'><input name='$fn' value='$feed' type='checkbox' $checked /><span> $name</span></label></div>";
        }
        ?>
        <p></p>
        <?PHP
    }

    public function update($new_instance, $old_instance) {
        $old_instance = $new_instance;

        $instance['title'] = $new_instance['title'];

        return $old_instance;
    }

    static function fixBool(&$item, $key) {
        if ($key === 'eventLimit') {
            return;
        }
        switch (strtolower($item)) {
            case "null" : $item = null;
                break;
            case "true" :
            case "yes" : $item = true;
                break;
            case "false" :
            case "no" : $item = false;
                break;
            default :
        }
    }

    public function widget($widget_args, $instance) {
        extract($widget_args);
        $title = apply_filters('widget_title', $instance['title']);
        echo $before_widget;
        if ($title) {
            echo $before_title . $title . $after_title;
        }
        $feeds = array();
        foreach ($instance as $key => $value) {

            if (false !== strpos($key, 'feed')) {
                $feeds[] = $value;
            }
        }
        $args = get_option('ibs_calendar_options');
        array_walk_recursive($args, array(__CLASS__, 'fixBool'));
        for ($i = 1; $args['feedCount'] >= $i; $i++) {
            $index = (string) $i;
            if (false == in_array($index, $feeds)) {
                $args['feeds']['feed_' . $i]['enabled'] = false;
            }
        }
        $args['legend'] = isset($instance['legend']);
        $args['list_max'] = (int) $instance['list_max'];
        $args['list_past'] = isset($instance['list_past']);
        $args['list_repeat'] = isset($instance['list_repeat']);
        $args['ibsEvents'] = isset($instance['ibs_events']);
        $args['width'] = '100%';
        $args['weekends'] = true;
        $args['theme'] = false;
        $args['editable'] = false;
        $args['event_list'] = $instance['has_list'];
        $args['defaultView'] = 'month';
        $args['headerLeft'] = 'prev';
        $args['headerCenter'] = 'title';
        $args['headerRight'] = 'next';
        $args['titleFormat'] = 'MMM YYYY';
        $args['dayNamesShort'] = array('Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa');
        $args['eventLimitClick'] = 'popover';
        $args['height'] = $instance['cal_height'] === 'null' ? null : $instance['cal_height'];
        $args['ajaxData'] = array("action" => "ibs_calendar_ajax", "type" => "event");
        $args['ajaxUrl'] = admin_url("admin-ajax.php");
        $args['id'] = $widget_id;
        $id = $widget_id;
        $width = $args['width'];
        $html = '<div id="ibs-calendar-id" class="aligncenter" style="width:650px;" >
            <form id="fullcalendar-id" >
                <div id="ibs-loading-id" ></div>
                <div id="legend-list-id" class="ibs-legend"></div>
            </form>
            <div>
                <input id="list-display-id" type="checkbox" style="margin : 10px;" />
                <span> &nbsp;Event List</span>
                <div id="event-list-id" style="max-height:200px; overflow:auto; display:none" >
                    <table id="event-table-id" style="width:100%;">
                        <tbody> 
                        </tbody>
                    </table>
                </div>       
            </div>
        </div>';
        $html = str_replace('-id', '-' . $id, $html);
        $html = str_replace('width:650px;', 'width :' . $width . ';', $html);
        $html = str_replace('max-height:200px;', 'max-height:' . $instance['lst_height'] . 'px;', $html);
        echo $html;
        ?>
        <script type="text/javascript">
            jQuery(document).ready(function ($) {
                new CalendarObj(jQuery, <?PHP echo json_encode($args); ?>, 'widget');
            });
        </script> 
        <?php
        echo $after_widget;
    }

}

function ibs_register_widget() {
    register_widget('IBS_WCalendar');
}

add_action('widgets_init', 'ibs_register_widget');
